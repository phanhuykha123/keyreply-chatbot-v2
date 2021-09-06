// import { inject } from '@vue/runtime-core';
import auth from '@/auth';
function checkLogin(to: any, from: any, next: any) {
  if (auth.state.isAuthenticated) {
    return next({ name: 'DashBoard' });
  }
  return next();
}

export default checkLogin;
