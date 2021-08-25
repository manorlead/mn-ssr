import { Alert, Button, Col, Divider, Form, Input, Row } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import Image from 'next/image'
import React, { useState } from 'react'
import { Line } from '../Shared/Line'
import { ModuleContainer } from '../Shared/ModuleContainer'

const WechatQR =
  'https://frontend-static-images.s3.amazonaws.com/contact/wechatQR.jpg'
const Wechat =
  'https://frontend-static-images.s3.amazonaws.com/contact/wechat.png'
const WhatsupQR =
  'https://frontend-static-images.s3.amazonaws.com/contact/whatsupQR.jpg'
const Whatsup =
  'https://frontend-static-images.s3.amazonaws.com/contact/whatsup.png'
const TelegramQR =
  'https://frontend-static-images.s3.amazonaws.com/contact/telegramQR.png'
const Telegram =
  'https://frontend-static-images.s3.amazonaws.com/contact/telegram.png'

export const ContactAgentSection = () => {
  const [form] = useForm()
  const [error, setError] = useState(false)

  const onSubmit = () => {
    const { firstName, lastName, email, phoneNumber } = form.getFieldsValue()

    if (firstName && lastName && email && phoneNumber) {
      setError(false)
    } else {
      setError(true)
    }
  }

  const contact = [
    {
      icon: Wechat,
      description: 'manorlead',
      qrCode: WechatQR,
      title: 'Wechat'
    },
    {
      icon: Whatsup,
      description: '+1 (647) 613-8678',
      qrCode: WhatsupQR,
      title: 'WhatsApp',
      link: 'https://wa.me/6476138678'
    },
    {
      icon: Telegram,
      description: 'manorlead',
      qrCode: TelegramQR,
      title: 'Telegram',
      link: 'https://t.me/joinchat/GvnT_SJAJ-MdTxq2'
    }
  ]
  return (
    <ModuleContainer
      backgroundStyle={{ background: 'url(/contact-bg.jpg) center/cover' }}
      containerStyle={{
        width: 800,
        background: 'white',
        padding: 100,
        margin: 80
      }}
    >
      <div className="primary_color text-4xl font-semibold text-center">
        Connect With A Manorlead Agent
      </div>
      <div className="centered my-10">
        <Line />
      </div>
      <div className="primary_color text-lg text-center font-thin mb-10">
        Connect with a Manorlead Agent through our WeChat or by entering your
        email. We’ll get back to you as soon as possible.
      </div>

      {error && (
        <div className="my-10">
          <Alert
            message="Error"
            description="It seems you haven't entered all of the required info. If you're having trouble, just contact us."
            type="error"
            showIcon
          />
        </div>
      )}

      <Form form={form}>
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item name="firstName">
              <Input placeholder="First Name" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName">
              <Input placeholder="Last Name" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item name="phoneNumber">
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="Email Address" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block
            onClick={onSubmit}
            size="large"
            className="text-white"
          >
            GET STARTED
          </Button>
        </Form.Item>
      </Form>

      <Divider>Or</Divider>

      <Row justify="space-between">
        {contact.map((c) => (
          <div key={c.title}>
            <Row align="middle" className="mb-2">
              <Image
                src={c.icon}
                width="30"
                height="30"
                layout="fixed"
                alt={c.title}
              />
              <div className="ml-2">
                <div>{c.title}</div>

                <a className="font-semibold" href={c.link}>
                  {c.description}
                </a>
              </div>
            </Row>
            <Image
              src={c.qrCode}
              width="100"
              height="100"
              layout="fixed"
              alt={c.title}
            />
          </div>
        ))}
      </Row>
    </ModuleContainer>
  )
}
