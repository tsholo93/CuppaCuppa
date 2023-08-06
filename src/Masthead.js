import './Masthead.css';

export default function Masthead({ tagline, headingX2 }) {
  return (
    <header className="masthead">
      <p className="masthead-tagline">
        {tagline}
      </p>
      <h2 className="masthead-heading">
        {headingX2}
      </h2>
    </header>
  )
}

export function MastheadCenter({ tagline, headingX2 }) {
  return (
    <header className="masthead-center">
      <p className="masthead-center-tagline">
        {tagline}
      </p>
      <h2 className="masthead-center-heading">
        {headingX2}
      </h2>
    </header>
  )
}
