import Field from '../components/Field'
import Button from '../components/Button'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export default () => (
  <div id="get-latest-builds">
    <form>
      <Field id="org" description="Your company name, probably.">
        Organization
      </Field>

      <Field
        id="key"
        placeholder="axp818372dqsd917dqa1708bqs4258ab"
        description={
          <>
            Available in the{' '}
            <a href="https://developer.cloud.unity3d.com/preferences/">
              Unity Cloud Build preferences
            </a>.
          </>
        }
      >
        API Key
      </Field>
    </form>

    <Button type="submit">Get Latest Builds</Button>
  </div>
)
