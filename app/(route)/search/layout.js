import React from "react";
import CategoryList from "./_components/CategoryList";

function layout({children}) {
  return (
<div class="container max-w-screen-lg ml-0">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="md:col-span-1">
            <CategoryList/>
        </div>
        <div class="md:col-span-3">
            {children}
        </div>
    </div>
</div>





  );
}

export default layout;

