interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string;
  startTrailAgain(): string;
  getCoupon(couponanme: string): number;
}
interface User {
  gitHUbtoken: string;
}
const hitesh: User = {
  email: "u@u.com",
  userId: 2323,
  dbId: 343,
  startTrailAgain: () => {
    return "trail started";
  },
  getCoupon(heel: "tuptap") {
    return 34;
  },
  gitHUbtoken: "343254agresg",
};
