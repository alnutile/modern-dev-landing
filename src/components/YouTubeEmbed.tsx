
interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
}

export const YouTubeEmbed = ({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) => {
  return (
    <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg mb-6">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border-0"
      ></iframe>
    </div>
  );
};
