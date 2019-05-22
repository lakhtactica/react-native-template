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
});
