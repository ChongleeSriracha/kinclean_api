function myMiddleware(req, res, next) {
    // Middleware logic here
    next();
}

module.exports = myMiddleware;
