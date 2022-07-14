export default [
  {
    id: 1,
    pid: 0, // 0表示顶级菜单
    path: '/course',
    name: 'Curriculum',
    title: '课程管理',
    icon: 'icon-setting',
    course:'课程管理'
  },
  {
    id: 2,
    pid: 1, // 0表示顶级菜单
    path: '/course/add',
    name: 'addCourse',
    title: '添加课程',
    icon: 'icon-tianjia',
    add:'添加课程'
  },
  {
    id: 3,
    pid: 1, // 0表示顶级菜单
    path: '/course/del',
    name: 'delCourse',
    title: '删除课程',
    icon: 'icon-delete',
    del:'删除课程'
  },
  {
    id: 4,
    pid: 1, // 0表示顶级菜单
    path: '/course/operate',
    name: 'Aoperation',
    title: '课程操作',
    icon: 'icon-operation',
    operate:'课程操作'
  },
  {
    id: 5,
    pid: 0, // 0表示顶级菜单
    path: '/student',
    name: 'Student',
    title: '学生管理',
    icon: 'icon-setting',
    student:'学生管理'
  },
  {
    id: 6,
    pid: 5, // 0表示顶级菜单
    path: '/students/add',
    name: 'addStudent',
    title: '添加学生',
    icon: 'icon-tianjia',
    add:'添加学生'
  },
  {
    id: 7,
    pid: 5, // 0表示顶级菜单
    path: '/students/del',
    name: 'delStudent',
    title: '删除学生',
    icon: 'icon-delete',
    del:'删除学生'
  },
  {
    id: 8,
    pid: 5, // 0表示顶级菜单
    path: '/students/operate',
    name: 'Boperation',
    title: '学生操作',
    icon: 'icon-operation',
    operate:'学生操作'
  },
  {
    id: 9,
    pid: 0, // 0表示顶级菜单
    path: '/teacher',
    name: 'Teacher',
    title: '教师管理',
    icon: 'icon-setting',
    teacher:'教师管理'
  },
  {
    id: 10,
    pid: 9, // 0表示顶级菜单
    path: '/teacher/add',
    name: 'addTeacher',
    title: '添加教师',
    icon: 'icon-tianjia',
    add:'添加教师'
  },
  {
    id: 11,
    pid: 9, // 0表示顶级菜单
    path: '/teacher/del',
    name: 'delTeacher',
    title: '删除教师',
    icon: 'icon-delete',
    del:'删除教师'
  },
  {
    id: 12,
    pid: 9, // 0表示顶级菜单
    path: '/teacher/operate',
    name: 'Coperation',
    title: '教师操作',
    icon: 'icon-operation',
    operate:'教师操作'
  },
  {
    id: 13,
    pid: 0, // 0表示顶级菜单
    path: '/class',
    name: 'Class',
    title: '班级管理',
    icon: 'icon-banjiguanli',
    class:'班级管理'
  },
  {
    id: 14,
    pid: 13, // 0表示顶级菜单
    path: '/class/add',
    name: 'addClass',
    title: '添加班级',
    icon: 'icon-tianjia',
    add:'添加班级'
  },
  {
    id: 15,
    pid: 13, // 0表示顶级菜单
    path: '/class/del',
    name: 'delClass',
    title: '删除班级',
    icon: 'icon-delete',
    del:'删除班级'
  },
  {
    id: 16,
    pid: 13, // 0表示顶级菜单
    path: '/class/operate',
    name: 'Doperation',
    title: '班级操作',
    icon: 'icon-operation',
    operate:'班级操作'
  },
]
