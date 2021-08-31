import { Button, Checkbox, Col, Form, Input, Modal, Row } from 'antd'
import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { useStores } from '../../store'
import intl from 'react-intl-universal'
import { useForm } from 'antd/lib/form/Form'
import { confirmPasswordRule, passwordRule } from '../../helpers/form.helpers'
import { SignupForm } from '../../requests/types/auth'
import { signUp } from '../../requests/auth'

export const SignupPopup = observer(() => {
  const {
    UserStore: { signupPopupState$, setSignupPopupState$ }
  } = useStores()
  const [form] = useForm<SignupForm>()
  const [registering, setRegitering] = useState(false)

  const onSubmit = async () => {
    const values = await form.validateFields()
    setRegitering(true)
    if (values) {
      signUp(values).then(() => {
        setRegitering(false)
      })
    }
  }

  return (
    <Modal
      title={null}
      visible={signupPopupState$}
      maskClosable={false}
      centered
      transitionName=""
      maskTransitionName=""
      footer={null}
      onCancel={() => {
        setSignupPopupState$(false)
        form.resetFields()
      }}
      destroyOnClose
    >
      <div className="p-8">
        <div className="text-2xl font-semibold mb-5 text-center">
          {intl.get('authentication.signup.title')}
        </div>
        <Form form={form} size="large">
          <Row gutter={[16, 0]}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: intl.get('authentication.warning.firstName')
                  }
                ]}
              >
                <Input
                  placeholder={intl.get('authentication.shared.firstName')}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: intl.get('authentication.warning.lastName')
                  }
                ]}
              >
                <Input
                  placeholder={intl.get('authentication.shared.lastName')}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: intl.get('authentication.warning.inputEmail')
              },
              {
                type: 'email',
                message: intl.get('authentication.warning.inputValidEmail')
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
              },
              passwordRule
            ]}
          >
            <Input.Password
              placeholder={intl.get('authentication.shared.pw')}
            />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: intl.get('authentication.warning.retypePW')
              },
              confirmPasswordRule
            ]}
          >
            <Input.Password
              placeholder={intl.get('authentication.shared.retypePW')}
            />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        intl.get('authentication.warning.acceptTerm')
                      )
              }
            ]}
          >
            <Checkbox>
              {intl.get('authentication.signup.confirmTerms')}
              <br />
              <a>{intl.get('authentication.signup.termOfUse')}</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              onClick={onSubmit}
              size="large"
              className="text-white"
              loading={registering}
              disabled={registering}
            >
              {intl.get('authentication.shared.continueWithEmail')}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
})
