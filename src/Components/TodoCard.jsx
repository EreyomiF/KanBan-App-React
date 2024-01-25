import React from 'react';
import ToDo from './TodoItem';

const TodoCard = ({ allProperties }) => {
  return (
    <section className="container-120">
      <div className="w-full sm:columns-2 lg:columns-3">
        {allProperties.map((item) => (
          <ToDo
            key={item.id} // Use item.id as the key, assuming 'id' is a unique property in each item
            id={item.id}
            grade={item.grade}
            acquisitionType={item.acquisitionType}
            image={item.image}
            price={item.price}
            name={item.name}
            rating={item.rating} // Fix the typo here (rating={item.rating})
            intro={item.intro} // Fix the typo here (intro={item.intro})
            features={item.features}
            condition={item.condition}
          />
        ))}
      </div>
    </section>
  );
};

export default TodoCard;
