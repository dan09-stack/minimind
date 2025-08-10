import { redirect } from 'next/navigation'

export const dynamic = 'force-static'

export default function HelpAliasPage() {
  redirect('/help-center')
}
