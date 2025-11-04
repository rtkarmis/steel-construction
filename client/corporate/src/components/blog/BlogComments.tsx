import Container from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";

export default function BlogComments() {
  const { getPage } = useLanguage();

  return (
    <section className="py-16 bg-surface border-t border-border/40">
      <Container>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-primary">
              {getPage("blog", "comments.title") || "Yorumlar"}
            </h2>
          </div>
          <p className="text-text/70">
            {getPage("blog", "comments.description") ||
              "Düşüncelerinizi paylaşın ve tartışmaya katılın."}
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div
            id="giscus-container"
            className="rounded-2xl border border-border/40 p-6 bg-background/50"
          >
            {/* Giscus will be loaded here */}
          </div>
        </div>
      </Container>
    </section>
  );
}
