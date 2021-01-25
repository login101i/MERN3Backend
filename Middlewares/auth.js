const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
    // console.log(req.headers); // token
    try {
        const firebaseUser = await admin
            .auth()
            .verifyIdToken(req.headers.authtoken);
        // console.log("FIREBASE USER W AUTHCHECK", firebaseUser);
        req.user = firebaseUser;
        next();
    } catch (err) {
        res.status(401).json({
            err: "Nieprawidłowy lub wygasły token",
        });
    }
};

exports.adminCheck = async (req, res, next) => {
    const { email } = req.user;

    const adminUser = await User.findOne({ email }).exec();

    if (adminUser.role !== "admin") {
        res.status(403).json({
            err: "Te zasoby dostępne są tylko dla administratora!",
        });
    } else {
        next();
    }
};
