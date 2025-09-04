from urllib import request
from django.shortcuts import redirect, render
from .models import Product, Category, Order, Customer  
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages



def home(request):
    products = Product.objects.all()
    return render(request, 'home.html', {'products': products})


def about(request):
    return render(request, 'about.html', {})

def login_user(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "Login successful!")
            return redirect('home')
        else:
            messages.error(request, "Invalid UserName or Password. Please try again.")
            return redirect('login')
    else:
        return render(request, 'login.html', {})
    


def logout_user(request):
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect('home')