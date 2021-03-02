module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5001),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'f0efd871f4549af498c5e83e6a3b7341'),
    },
  },
});
