import Navigation from "@/components/Navigation";
import GeneralInformationScreen from "@/components/screens/GeneralInformationScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <GeneralInformationScreen />
        {children}
      </body>
    </html>
  );
}
