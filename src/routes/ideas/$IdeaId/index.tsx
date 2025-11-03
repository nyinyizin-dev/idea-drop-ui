import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/$IdeaId/')({
  component: IdeaDetailsPage,
})

function IdeaDetailsPage() {
  return <div>Hello "/ideas/$IdeaId/"!</div>
}
