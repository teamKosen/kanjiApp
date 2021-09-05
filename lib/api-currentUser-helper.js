export function extractCurrentUser(req) {
    if (!req.user) return null;
    // take only needed user fields to avoid sensitive ones (such as password)
    const { name, email, userType, _id} = req.user;
    return {
      _id,
      name,
      email,
      userType,
    };
  }