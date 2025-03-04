import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container, Heading, Text } from "@medusajs/ui";
import { useQuery } from "@tanstack/react-query"
import { sdk } from "../lib/config"

const CategoriesWidget = () => {
  const productCategories = useQuery({
    queryFn: () => sdk.admin.productCategory.list({ limit: 100, offset: 0 }),
    queryKey: ["productCategories"],
  })

  const products = useQuery({
    queryFn: () => sdk.admin.product.list(),
    queryKey: ["product"],
  })

  console.log(products.data, productCategories.data);
  


  return (
    <Container className="divide-y p-4">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">🗂 Subcategory</Heading>
      </div>
      <div className="px-6 py-2">
        <Text>No categories found.</Text>
      </div>
    </Container>
  );
};

// Define where to place the widget
export const config = defineWidgetConfig({
  zone: "product_category.list.after", // Change if needed
});

export default CategoriesWidget;
