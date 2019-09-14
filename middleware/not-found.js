async function notFound(ctx, next) {
  await next();

  const status = ctx.status || 404;
  if (status === 404) {
    ctx.status = status;
    ctx.body = {
      message: 'Not found'
    };
  }
}

module.exports = notFound;
