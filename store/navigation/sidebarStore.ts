import { create } from 'zustand'

type SidebarStore = {
  isShow: boolean
  currentMenuId: string
  setCurrentMenuId: (id: string) => void
  setIsShow: (val: boolean) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
  isShow: false,
  currentMenuId: '',
  setCurrentMenuId: (id) => set({ currentMenuId: id }),
  setIsShow: (val) => set({ isShow: val }),
}))
