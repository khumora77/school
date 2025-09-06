import { cards } from "@/constants";
import { motion } from "framer-motion";

const Teachers = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 p-6">
      <h1 className="text-3xl font-bold text-center mb-10">O‘qituvchilar</h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        {cards.map((item) => (
          <motion.div
           
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg hover:shadow-xl rounded-lg border border-gray-300 overflow-hidden transition-all group"
          >
            <img
              src={item.image}
              alt={`O‘qituvchi ${item}`}
              className="w-full h-[350px] object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
            />
         
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Teachers;
