// import {default as xs} from 'xstream'
import {run} from '@cycle/run'
import {div, label, input, hr, h1, makeDOMDriver} from '@cycle/dom/lib/index.js' // Using the CJS build in lieu of bug-free ES6 ones.

const placeholder = 'Web'

const main = sources => {
  const input$ = sources.DOM.select('.field').events('input')

  const name$ = input$.map(ev => ev.target.value).startWith(placeholder)

  const vdom$ = name$.map(name =>
    div([
      hr(),
      label('Name: '),
      input('.field', {attrs: {type: 'text', placeholder}}),
      h1(`Hullo from Cycle.js, ${name}!`),
    ])
  )

  return { DOM: vdom$ }
}

run(main, { DOM: makeDOMDriver('#app-container') })
