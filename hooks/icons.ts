import type { FileNode } from '../types'

const cp = (n: number) => String.fromCodePoint(n)

export const CHEVRON_OPEN = cp(0xf47c)
export const CHEVRON_CLOSED = cp(0xf460)

// Every file gets the same plain document glyph; the pane draws it in its muted grey.
const FILE = 0xf0214

export function fileIcon(n: FileNode, open: boolean, isRepo: boolean): string {
  if (n.kind === 'link') return cp(0xf481)
  // Filled Material folders, closed and open: one calm shape, coloured by the pane's accent.
  if (n.kind === 'dir') return cp(isRepo ? 0xf02a2 : open ? 0xf0770 : 0xf024b)
  return cp(FILE)
}

export const GIT_COLOR: Record<string, string> = {
  A: '#98c379',
  '?': '#98c379',
  R: '#61afef',
  C: '#61afef',
  M: '#e5c07b',
  T: '#e5c07b',
}

export const LIGHT_GIT_COLOR: Record<string, string> = {
  A: '#14532d',
  '?': '#14532d',
  R: '#1e3a8a',
  C: '#1e3a8a',
  M: '#78350f',
  T: '#78350f',
}

const PRIORITY = ['U', 'D', 'M', 'T', 'R', 'C', 'A', '?']

export function stronger(a: string | undefined, b: string): string {
  if (!a) return b
  return PRIORITY.indexOf(b) < PRIORITY.indexOf(a) ? b : a
}
