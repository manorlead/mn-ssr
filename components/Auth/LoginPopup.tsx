import { Button, Form, Input, Modal } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import { useStores } from '../../store'
import intl from 'react-intl-universal'
import { useForm } from 'antd/lib/form/Form'

export const LoginPopup = observer(() => {
  const {
    UserStore: {
      loginPopupState$,
      setLoginPopupState$,
      login$,
      loginInLoading$
    }
  } = useStores()
  const [form] = useForm()

  const onSubmit = async () => {
    const { email, password } = await form.validateFields()
    login$({ email, password }).then(() => {
      setLoginPopupState$(false)
    })
  }

  return (
    <Modal
      title={null}
      visible={loginPopupState$}
      maskClosable={false}
      centered
      transitionName=""
      maskTransitionName=""
      footer={null}
      onCancel={() => {
        setLoginPopupState$(false)
        form.resetFields()
      }}
      destroyOnClose
    >
      <div className="p-8">
        <div className="text-2xl font-semibold mb-5 text-center">
          {intl.get('shared.Log In')}
        </div>
        <Form form={form} size="large">
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: intl.get('authentication.warning.inputEmail')
              }
            ]}
          >
            <Input placeholder={intl.get('authentication.shared.email')} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: intl.get('authentication.warning.inputPW')
              }
            ]}
          >
            <Input.Password
              placeholder={intl.get('authentication.shared.pw')}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              onClick={onSubmit}
              size="large"
              className="text-white"
              loading={loginInLoading$}
              disabled={loginInLoading$}
            >
              {intl.get('shared.Log In')}
            </Button>
          </Form.Item>
        </Form>

        <Button type="link" block>
          {intl.get('authentication.shared.forgotPassword')}
        </Button>
      </div>
    </Modal>
  )
})
