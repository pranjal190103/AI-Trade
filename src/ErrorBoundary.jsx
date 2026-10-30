import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error) { console.error('Demo rendering error:', error) }
  render() {
    if (this.state.error) return <main style={{ margin: '10vh auto', maxWidth: 560, background: '#fff', border: '1px solid #eaedf1', borderRadius: 12, padding: 24, color: '#202633', fontFamily: 'system-ui' }}><h1 style={{ fontSize: 20 }}>The demo hit a rendering error</h1><p style={{ color: '#687283', fontSize: 13 }}>{this.state.error.message}</p><button onClick={() => window.location.reload()} style={{ background: '#7262df', color: '#fff', border: 0, borderRadius: 7, padding: '10px 14px' }}>Reload demo</button></main>
    return this.props.children
  }
}
