import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface PastWorkCardProps {
  title: string;
  description: React.ReactNode;
  mediaSrc?: string;
  mediaType?: "video" | "image" | "none";
}

export default function PastWorkCard({
  title,
  description,
  mediaSrc,
  mediaType = "none",
}: PastWorkCardProps) {
  return (
    <Card className="flex w-full mx-auto max-w-4xl bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
      <CardHeader className="px-6">
        <CardTitle className="text-3xl text-center font-bold text-foreground mx-auto">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 w-full">
        {mediaType !== "none" && mediaSrc ? (
          <div className="text-sm leading-relaxed text-foreground sm:text-base">
            <div
              className="mb-3 ml-4"
              style={{ float: "right", width: "60%" }}
            >
              {mediaType === "video" && mediaSrc && (
                <div className="overflow-hidden rounded-lg">
                  <iframe
                    src={mediaSrc}
                    className="aspect-video w-full"
                    allowFullScreen
                    title="Past work example"
                  />
                </div>
              )}
              {mediaType === "image" && mediaSrc && (
                <img
                  src={mediaSrc}
                  alt={title}
                  className="block h-auto w-full rounded-lg"
                />
              )}
            </div>
            {description}
            <div className="clear-both" />
          </div>
        ) : (
          <div className="text-sm leading-relaxed text-foreground sm:text-base">
            {description}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
