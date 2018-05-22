class Employee(object):
    def __init__(self, name, title, start_date):
        self.name = name
        self.title = title
        self.start_date = start_date

    def get_name(self):
        return self.name
    def get_title(self):
        return self.title
    def get_start_date(self):
        return self.start_date

class Company(object):
    def __init__(self, name, address): 
        self.name = name
        self.address = address
        self.employees = set()

    def get_name(self):
        return self.name
    def get_address(self):
        return self.address
    def list_employees_names(self):
        {print(e.get_name()) for e in self.employees}


if __name__ == '__main__':
    Bangazon = Company('Bangazon', '123 Main St')
    mary = Employee('Mary Ketch', 'CEO', '01-01-2018')
    david = Employee('David Ketch', 'Janitor', '01-01-2018')
    stephen = Employee('Stephen Ketch', 'Sales Associate', '01-01-2018')
    Bangazon.employees.add(mary)
    Bangazon.employees.add(david)
    Bangazon.employees.add(stephen)
    Bangazon.list_employees_names()
