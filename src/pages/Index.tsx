import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Store' },
    { id: 'games', name: 'Игровые аккаунты', icon: 'Gamepad2' },
    { id: 'software', name: 'Windows и ПО', icon: 'Laptop' },
    { id: 'subscriptions', name: 'Подписки', icon: 'Sparkles' },
  ];

  const products = [
    {
      id: 1,
      title: 'Steam Account - CS2 Prime',
      category: 'games',
      price: 1299,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Хит продаж',
      instant: true,
      rating: 4.9,
      sales: 234
    },
    {
      id: 2,
      title: 'Windows 11 Pro',
      category: 'software',
      price: 599,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Лицензия',
      instant: true,
      rating: 5.0,
      sales: 567
    },
    {
      id: 3,
      title: 'Epic Games - Fortnite',
      category: 'games',
      price: 899,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Новинка',
      instant: true,
      rating: 4.8,
      sales: 145
    },
    {
      id: 4,
      title: 'Spotify Premium 12 месяцев',
      category: 'subscriptions',
      price: 1499,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Выгодно',
      instant: true,
      rating: 4.9,
      sales: 389
    },
    {
      id: 5,
      title: 'Office 365 на год',
      category: 'software',
      price: 799,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Популярно',
      instant: true,
      rating: 4.7,
      sales: 423
    },
    {
      id: 6,
      title: 'Netflix Premium 4K',
      category: 'subscriptions',
      price: 1199,
      image: 'https://cdn.poehali.dev/projects/141fa0f7-e56e-4108-b151-6bd1c2b4ba74/files/dc0d29f1-10b4-49fa-b0ed-133a2fd8adcd.jpg',
      badge: 'Акция',
      instant: true,
      rating: 4.8,
      sales: 298
    }
  ];

  const faqItems = [
    {
      question: 'Как происходит выдача товара?',
      answer: 'После успешной оплаты товар автоматически отправляется на вашу электронную почту в течение 1-5 минут. Все данные для доступа будут в письме.'
    },
    {
      question: 'Какие гарантии предоставляются?',
      answer: 'Мы предоставляем гарантию на все цифровые товары. Если возникнут проблемы с доступом, наша поддержка поможет в течение 24 часов.'
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Возврат возможен в течение 24 часов, если товар не был активирован или использован. Средства возвращаются на тот же способ оплаты.'
    },
    {
      question: 'Как стать продавцом?',
      answer: 'Зарегистрируйтесь как продавец через раздел "Для продавцов", пройдите верификацию и начните размещать свои товары на платформе.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <Icon name="Store" size={28} className="text-primary" />
              <span className="gradient-primary bg-clip-text text-transparent">DigiMarket</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#catalog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Каталог
            </a>
            <a href="#sellers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Продавцам
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button className="gradient-primary">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <Badge className="mb-4 gradient-primary border-0 text-white">
              <Icon name="Zap" size={14} className="mr-1" />
              Мгновенная выдача товаров
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Маркетплейс цифровых товаров
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Игровые аккаунты, лицензии Windows, подписки на сервисы — всё в одном месте
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Найти товар..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card border-border/50"
                />
              </div>
              <Button size="lg" className="gradient-primary h-12">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Купить сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Каталог товаров</h2>
              <p className="text-muted-foreground">Выберите категорию или просмотрите все предложения</p>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 h-auto p-1 bg-muted/50">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="flex items-center gap-2 py-3 data-[state=active]:gradient-primary data-[state=active]:text-white"
                >
                  <Icon name={cat.icon as any} size={18} />
                  <span className="hidden sm:inline">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((p) => cat.id === 'all' || p.category === cat.id)
                    .map((product, idx) => (
                      <Card
                        key={product.id}
                        className="glass-effect hover-scale overflow-hidden group cursor-pointer"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                      >
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="gradient-primary border-0 text-white shadow-lg">
                              {product.badge}
                            </Badge>
                          </div>
                          {product.instant && (
                            <div className="absolute top-3 right-3">
                              <Badge variant="secondary" className="bg-green-500/90 text-white border-0 shadow-lg">
                                <Icon name="Zap" size={12} className="mr-1" />
                                Моментально
                              </Badge>
                            </div>
                          )}
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg">{product.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{product.sales} продаж</span>
                          </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex items-center justify-between pt-0">
                          <div>
                            <p className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                              {product.price} ₽
                            </p>
                          </div>
                          <Button className="gradient-primary">
                            <Icon name="ShoppingCart" size={16} className="mr-2" />
                            Купить
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="sellers" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 gradient-primary border-0 text-white">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                Для продавцов
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните продавать прямо сейчас</h2>
              <p className="text-muted-foreground text-lg">
                Присоединяйтесь к тысячам продавцов и зарабатывайте на цифровых товарах
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="glass-effect text-center p-6">
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="UserPlus" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Регистрация</h3>
                <p className="text-sm text-muted-foreground">Создайте аккаунт продавца за 2 минуты</p>
              </Card>

              <Card className="glass-effect text-center p-6">
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="Package" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Добавьте товары</h3>
                <p className="text-sm text-muted-foreground">Загрузите свои цифровые товары</p>
              </Card>

              <Card className="glass-effect text-center p-6">
                <div className="mx-auto w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                  <Icon name="Wallet" size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">Получайте выплаты</h3>
                <p className="text-sm text-muted-foreground">Автоматические выплаты каждую неделю</p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="gradient-primary">
                <Icon name="Rocket" size={20} className="mr-2" />
                Стать продавцом
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground text-lg">
                Ответы на популярные вопросы о работе маркетплейса
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="glass-effect border-0 px-6 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    <div className="flex items-start gap-3">
                      <Icon name="HelpCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span>{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-9">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-12 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold mb-4">
                <Icon name="Store" size={24} className="text-primary" />
                <span className="gradient-primary bg-clip-text text-transparent">DigiMarket</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надёжный маркетплейс цифровых товаров с мгновенной доставкой
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Игровые аккаунты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Windows и ПО</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Подписки</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантии</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>support@digimarket.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  <span>Telegram: @digimarket</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 DigiMarket. Все права защищены.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Пользовательское соглашение</a>
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
