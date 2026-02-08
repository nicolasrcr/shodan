import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { Check, Star, Shield, Clock, Award, Users, BookOpen, Video, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import shodanImage from "@/assets/shodan-hero.png";

// Animation variants with proper typing
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const LandingPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [showPixModal, setShowPixModal] = useState(false);

  const benefits = [
    { icon: BookOpen, textKey: "benefits.content" },
    { icon: Video, textKey: "benefits.videos" },
    { icon: Award, textKey: "benefits.flashcards" },
    { icon: Users, textKey: "benefits.quizzes" },
    { icon: Shield, textKey: "benefits.access" },
    { icon: Clock, textKey: "benefits.pace" },
  ];

  const moduleKeys = [
    "modules.history",
    "modules.principles",
    "modules.etiquette",
    "modules.nomenclature",
    "modules.gokyo",
    "modules.katame",
    "modules.nagekata",
    "modules.katamekata",
    "modules.rules",
    "modules.organization",
    "modules.school",
    "modules.firstaid",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-secondary via-judo-red-dark to-secondary border-b-[3px] border-primary py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-serif text-primary">柔道</span>
            <div>
              <h1 className="text-lg font-bold text-white">{t("header.title")}</h1>
              <p className="text-xs text-foreground/70">{t("header.subtitle")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button 
              onClick={() => navigate('/login')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-secondary"
            >
              {t("header.login")}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-primary/20 rounded-full"
                variants={scaleIn}
              >
                <span className="text-primary text-sm font-semibold">{t("hero.badge")}</span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t("hero.title1")}
                <span className="text-primary block">{t("hero.title2")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate('/cadastro')}
                  className="btn-gold text-lg px-8 py-6"
                >
                  {t("hero.cta")}
                </Button>
                <Button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
                >
                  {t("hero.details")}
                </Button>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-primary/30 shadow-gold">
                <img 
                  src={shodanImage} 
                  alt="Shodan - Exame Faixa Preta"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <p className="text-primary font-serif text-2xl">初段</p>
                <p className="text-xs text-muted-foreground">{t("hero.firstDan")}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-white text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            {t("benefits.title1")} <span className="text-primary">{t("benefits.title2")}</span>
          </motion.h2>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="card-judo group h-full">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-white font-medium">{t(benefit.textKey)}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              {t("modules.title1")} <span className="text-primary">{t("modules.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              {t("modules.subtitle")}
            </p>
          </motion.div>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {moduleKeys.map((key, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                variants={scaleIn}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white">{t(key)}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 bg-gradient-to-b from-card/50 to-background overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              {t("pricing.title1")} <span className="text-primary">{t("pricing.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              {t("pricing.subtitle")}
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
          >
            <Card className="card-red rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t("pricing.productName")}</h3>
                    <p className="text-muted-foreground mb-4">{t("pricing.accessPeriod")}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" /> {t("pricing.modules")}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" /> {t("pricing.flashcardsQuizzes")}
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" /> {t("pricing.updates")}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="text-muted-foreground line-through text-lg">R$ 397</span>
                    </div>
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                      R$ 197
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      {t("pricing.singlePayment")}
                    </p>
                    <div className="space-y-3">
                      <Button 
                        onClick={() => navigate('/cadastro')}
                        className="btn-gold w-full text-lg py-6"
                      >
                        {t("pricing.cardPayment")}
                      </Button>
                      <Button 
                        onClick={() => setShowPixModal(true)}
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-secondary py-6"
                      >
                        {t("pricing.pixPayment")}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <p className="text-xl md:text-2xl text-primary italic mb-4">
            {t("quote.text")}
          </p>
          <p className="text-muted-foreground">{t("quote.author")}</p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 pt-12 pb-8 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-8">
            <a 
              href="https://wa.me/5561996634944" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors"
            >
              <Phone className="w-5 h-5 text-white" />
            </a>
            <a 
              href="mailto:contato@shodanedu.com.br"
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Links Section */}
            <div>
              <h4 className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">{t("footer.links")}</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {t("footer.resources")}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    {t("footer.plans")}
                  </button>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    {t("footer.testimonials")}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                    {t("footer.privacy")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">{t("footer.contact")}</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://wa.me/5561996634944" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-green-500" />
                    +55 61 99663-4944
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contato@shodanedu.com.br"
                    className="flex items-center gap-3 text-muted-foreground hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    contato@shodanedu.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-red-500" />
                  Brasília, DF - Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-border/30 pt-6">
            <p className="text-center text-muted-foreground text-sm mb-2">
              {t("footer.copyright")}
            </p>
            <p className="text-center text-muted-foreground text-sm">
              {t("footer.madeWith")} <span className="text-red-500">❤️</span> {t("footer.forJudo")}
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5561996634944"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-40"
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* PIX Modal */}
      {showPixModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full bg-card border-primary/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center">{t("pix.title")}</h3>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.key")}</p>
                <p className="text-primary font-mono break-all">62.333.509/0001-03</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.value")}</p>
                <p className="text-2xl font-bold text-primary">R$ 197,00</p>
              </div>
              <div className="bg-primary/20 border border-primary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">{t("pix.whatsapp")}</p>
                <a 
                  href="https://wa.me/5561996634944" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary font-bold text-lg hover:underline"
                >
                  (61) 99663-4944
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4 text-center">
                {t("pix.instructions")}
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => setShowPixModal(false)}
                  variant="outline"
                  className="flex-1 border-primary/50 text-primary"
                >
                  {t("pix.close")}
                </Button>
                <Button 
                  onClick={() => navigate('/cadastro')}
                  className="flex-1 btn-gold"
                >
                  {t("pix.register")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
