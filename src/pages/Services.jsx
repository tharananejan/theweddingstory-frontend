import PageHeader   from './PageHeader';
import PricingCards from './PricingCards';
import TrustSection from './TrustSection';
import styles       from './services.module.css';

export default function Services() {
  return (
    <main className={styles.page}>
      <PageHeader />
      <PricingCards />
      <TrustSection />
    </main>
  );
}