import('../src/index.js')

const consoleWarningSpy = vi.spyOn(console, 'warn')

it('shows a console warning if there are no config files', () => {
	expect(consoleWarningSpy).not.toHaveBeenCalled()
})
