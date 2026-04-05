export const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
};
//# sourceMappingURL=not-found.middleware.js.map