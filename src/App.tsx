import { routerConfig } from '@/router'
import { RouterProvider } from 'react-router-dom'
import { Button, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import '@/styles/index.css'

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <RouterProvider
        router={routerConfig}
      />
    </ConfigProvider>
  )
}

export default App
