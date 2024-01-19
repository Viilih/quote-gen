import { Card, CardContent, CardHeader } from "../ui/card";

export const QuoteCard = () => {
  return (
    <Card className="border-slate-900 rounded max-w-80">
      <CardHeader>
        <h3 className="text-xl font-semibold">Stephen Hawking</h3>
      </CardHeader>
      <CardContent>
        Look up at the stars and not down at your feet. Try to make sense of
        what you see, and wonder about what makes the universe exist. Be
        curious.
      </CardContent>
    </Card>
  );
};
