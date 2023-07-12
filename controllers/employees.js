const { prisma } = require("../prisma/prisma-client");

/**
 * @route GET /api/employees
 * @desc Получение всех сотрудников
 * @access Private
 */

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ message: "Не удалось получить сотрудников" });
  }
};

const add = async (res, req) => {
  try {
    const data = req.body;
    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({ message: "Все поля обязательные" });
    }

    const employee = prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        createdEmployee: {
          create: data,
        },
      },
    });

    return res.status(201).json(employee);
  } catch {}
};

module.exports = {
  all,
  add,
};
