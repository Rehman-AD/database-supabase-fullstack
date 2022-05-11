import { Modal, Button, Typography, Input, Alert, Form } from '@supabase/ui'

export default function TextConfirmModal({
  title,
  onConfirm,
  visible,
  onCancel,
  loading,
  confirmLabel,
  confirmPlaceholder,
  confirmString,
  alert,
  text,
}) {
  const validate = (values) => {
    const errors = {}
    if (values.confirmValue.length === 0) {
      errors.confirmValue = 'Enter the required value.'
    } else if (values.confirmValue !== confirmString) {
      errors.confirmValue = 'Value entered does not match.'
    }
    return errors
  }

  const onSubmit = async (values, form) => {
    console.log('onSUBMITTT', values, confirmString, form)
  }

  return (
    <Modal hideFooter closable size="small" visible={visible} header={title} onCancel={onCancel}>
      <Form
        validateOnBlur
        initialValues={{ confirmValue: '' }}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <div className="w-full py-4">
            <div className="space-y-4">
              {alert && (
                <Modal.Content>
                  <Alert variant="warning" withIcon title={alert} />
                </Modal.Content>
              )}
              <Modal.Content>
                <Typography.Text className="block">
                  <p className="mb-2 text-sm">{text}</p>
                </Typography.Text>
              </Modal.Content>
              <Modal.Seperator />
              <Modal.Content>
                <Input
                  id="confirmValue"
                  label={
                    <span>
                      Type <span className="text-scale-1200">{confirmString}</span> to confirm.
                    </span>
                  }
                  placeholder={confirmPlaceholder}
                />
              </Modal.Content>
              <Modal.Seperator />
              <Modal.Content>
                <Button
                  block
                  type="danger"
                  size="medium"
                  htmlType="submit"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  onClick={() => onSubmit()}
                >
                  {confirmLabel}
                </Button>
              </Modal.Content>
            </div>
          </div>
        )}
      </Form>
    </Modal>
  )
}
