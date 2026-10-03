<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Figma-inspired homepage presentation self-contained in `src/routes/index.tsx` so the shared chrome and other content pages retain their existing styling.
- Inner content pages share a photographic hero and navigation while each page owns its own editorial content composition; this keeps brand consistency with distinct page layouts.
- Keep shared mobile navigation and lightweight motion behavior in `src/components/motion-details.tsx`; this keeps interactions consistent across the homepage and inner pages without duplicating browser observers.
- Keep route-wide curtain transitions in the root layout via `src/components/page-curtain.tsx`; this synchronizes navigation with the full-screen cover across content pages.
