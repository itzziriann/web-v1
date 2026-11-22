import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface PastWorkCardProps {
  title: string;
  description: React.ReactNode;
  imageSrc?: string;
}

export default function PCCard({
  title,
  description,
  imageSrc,
}: PastWorkCardProps) {
  return (
    <Card className="flex w-full mx-auto max-w-4xl bg-card/50 backdrop-blur-md shadow-[0_0_40px_-18px_rgba(14,30,50,0.9)] p-10">
      <CardHeader className="px-6">
        <CardTitle className="text-3xl text-center font-bold text-foreground mx-auto">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 w-full">
        {(imageSrc && (
          <div className="text-sm leading-relaxed text-foreground sm:text-base">
            <div className="mb-3 ml-4" style={{ float: "right", width: "60%" }}>
              <img
                src={imageSrc}
                alt={title}
                className="block h-auto w-full rounded-lg"
              />
            </div>
            {description}
            <div className="clear-both" />
          </div>
        )) || (
          <div className="text-sm leading-relaxed text-foreground sm:text-base">
            {description}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
