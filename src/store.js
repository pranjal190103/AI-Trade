import { create } from 'zustand'
import { initialData } from './data'

const KEY = 'tradieflow-demo-v1'
function readState() {
  try {
    const saved = localStorage.getItem(KEY)
    return saved ? { ...initialData, ...JSON.parse(saved) } : structuredClone(initialData)
  } catch { return structuredClone(initialData) }
}

export const useStore = create((set, get) => ({
  data: readState(), role: 'Business Owner', toast: '',
  persist: (data) => { localStorage.setItem(KEY, JSON.stringify(data)); set({ data }) },
  notify: (toast) => { set({ toast }); window.setTimeout(() => set({ toast: '' }), 2800) },
  setRole: (role) => set({ role }),
  add: (collection, record) => {
    const data = structuredClone(get().data)
    const id = `${collection.slice(0, 3).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`
    data[collection].unshift({ id, ...record })
    const singular = { customers: 'Customer', enquiries: 'Enquiry', jobs: 'Job', quotes: 'Quote', invoices: 'Invoice' }[collection] || 'Record'
    data.activity.unshift({ icon: 'sparkle', title: `${singular} created`, detail: `${record.name || record.customer || record.description || id} · Demo action`, time: 'Just now', tone: 'violet' })
    get().persist(data); get().notify('Saved to your demo workspace')
  },
  update: (collection, id, changes) => { const data = structuredClone(get().data); data[collection] = data[collection].map((r) => r.id === id ? { ...r, ...changes } : r); get().persist(data) },
  remove: (collection, id) => { const data = structuredClone(get().data); data[collection] = data[collection].filter((r) => r.id !== id); get().persist(data); get().notify('Record removed') },
  toggleAutomation: (name) => { const data = structuredClone(get().data); data.automations = data.automations.map((a) => a.name === name ? { ...a, enabled: !a.enabled } : a); get().persist(data) },
  readNotification: (id) => { const data = structuredClone(get().data); data.notifications = data.notifications.map((n) => n.id === id ? { ...n, read: true } : n); get().persist(data) },
  reset: () => { const data = structuredClone(initialData); localStorage.removeItem(KEY); set({ data }); get().notify('Demo data restored') },
}))
