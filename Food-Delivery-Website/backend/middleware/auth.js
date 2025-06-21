import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized, login again" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, message: "Token expired, please login again" });
        }
        res.status(401).json({ success: false, message: "Invalid token" });
    }
};

export default authMiddleware;
