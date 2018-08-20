import Link from 'next/link'
import Text from '../../components/Text'

export default () => {
  return (
    <Text>
      <h1>About</h1>
      <h2>Privacy Policy</h2>
      <p>
        It's actually pretty simple:{' '}
        <strong>Cloudy Build do not store anything</strong>. When you save a
        field, it's only for <strong>your</strong> browser.
      </p>
      <p>I don't even use Google Analytics.</p>

      <h2>Code</h2>
      <p>
        The{' '}
        <a href="https://github.com/solarsailer/cloudy-build" target="_blank">
          code is open-sourced
        </a>
        , so feel free to review it and submit a pull request if needed.
      </p>

      <h2>Other projects</h2>
      <p>
        You like{' '}
        <Link href="/">
          <a>Cloudy Build</a>
        </Link>
        ? Check out my other projects, like{' '}
        <a href="https://github.com/pixelnest/presskit.html">presskit.html</a>{' '}
        or <a href="http://steredenn.pixelnest.io/">Steredenn</a>.
      </p>
    </Text>
  )
}
