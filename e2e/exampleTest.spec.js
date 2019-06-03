describe('Template', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should login correctly', async () => {
    await element(by.id('usernameField')).typeText('username@username.com');
    await element(by.id('passwordField')).typeText('password');
    await element(by.id('loginButton')).tap();

    await expect(element(by.id('homeLabel'))).toBeVisible();
    await expect(element(by.id('welcomeLabel'))).toBeVisible();
    await expect(element(by.id('welcomeLabel'))).toHaveText('Welcome Jorge');
  });

  it('should go to profile', async () => {
    await element(by.text('Profile')).tap();

    await expect(element(by.id('logoutButton'))).toBeVisible();
    await expect(element(by.id('profileTitle'))).toBeVisible();
  });

  it('should go to login when logging out', async () => {
    await element(by.text('Profile')).tap();
    await element(by.id('logoutButton')).tap();

    await expect(element(by.id('usernameField'))).toBeVisible();
    await expect(element(by.id('passwordField'))).toBeVisible();
    await expect(element(by.id('loginButton'))).toBeVisible();
  });
});
