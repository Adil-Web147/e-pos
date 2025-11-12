import React from "react";
import AddCategoryForm from "./AddCategoryForm";
import CategoryTable from "./CategoryTable";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen p-8 bg-linear-to-b from-[#0f2130] via-[#132735] to-[#0b1b27] text-white">
      <div className="max-w-[1200px] mx-auto">
        <header className="mb-6">
          <h1 className="text-4xl font-bold">Category Management</h1>
          <p className="text-gray-300 mt-2">
            Organize and manage your product or content categories seamlessly.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="lg:col-span-4">
            <AddCategoryForm />
          </section>

          <section className="lg:col-span-8">
            <CategoryTable />
          </section>
        </div>
      </div>
    </div>
  );
}
