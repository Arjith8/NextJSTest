export default async function InvoicesPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  return <p>Invoices Page</p>
}
