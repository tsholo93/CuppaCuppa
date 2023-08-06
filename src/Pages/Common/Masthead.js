import './styles/Masthead.css';

export default function Masthead({ tagline, headingX2 }) {
  return (
    <header className="cuppa-masthead">
      <p className="cuppa-masthead-tagline">
        {tagline}
      </p>
      <h2 className="cuppa-masthead-heading">
        {headingX2}
      </h2>
    </header>
  )
}

export function MastheadCenter({ tagline, headingX2 }) {
  return (
    <header className="cuppa-masthead-center">
      <p className="cuppa-masthead-center-tagline">
        {tagline}
      </p>
      <h2 className="cuppa-masthead-center-heading">
        {headingX2}
      </h2>
    </header>
  )
}
