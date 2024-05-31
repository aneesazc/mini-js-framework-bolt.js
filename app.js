let state = reactive({ message: "Hello there" })

function renderApp() {
  render('#container', `<h1>${state.message}</h1>`)
}

renderApp()

setTimeout(() => {
  mockWeatherData.message = "Hello World!!!";
}, 1000)