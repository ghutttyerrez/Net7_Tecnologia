import { Helmet } from "react-helmet-async";

type Props = { title?: string; description?: string };

export default function SEO({ title, description }: Props) {
  const fullTitle = title ? `${title} • Link Internet` : "Link Internet";
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
