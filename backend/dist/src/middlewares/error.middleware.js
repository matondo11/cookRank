export const errorHandler = (err, _req, res, _next) => {
    console.error(err?.stack ?? err);
    const status = err?.status ?? 500;
    const message = err?.message ?? 'Something went wrong!';
    res.status(status).json({ error: message });
};
//# sourceMappingURL=error.middleware.js.map