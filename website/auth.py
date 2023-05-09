from flask import Blueprint, render_template, request, flash, redirect, url_for,Response,jsonify
from flask_login import current_user
import sqlite3
import random
from website.otp import *
con = sqlite3.connect("tutorial.db",check_same_thread=False)
cur = con.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS login( namee varchar,email varchar,password varchar, phone varchar )")


auth = Blueprint('auth', __name__)
email=0
number = 0
password=0
name=0
rr = 0

@auth.route('/', methods=['GET', 'POST'])
def firstpage():
    return render_template("home.html", user=current_user)


@auth.route('/login', methods=['GET', 'POST'])
def login():
  global email
  if email==0 :
   if request.method == "POST":
    emailornum = request.form.get('emailornum')
    password = request.form.get('password')
    cur.execute("select * from login")
    my_data = cur.fetchall()
    msc = 0
    record = 0
    for i in my_data:
        if emailornum in i:
            msc += 1
            record = i
            break
        else:
            continue
    if msc == 0:
        flash('Invalid Email or Username', category='error')

    else:
        if password != record[2]:
            flash('Incorrect password', category='error')

        else:
            flash('Login successful', category='success')
            return redirect(url_for('auth.home'))

   return render_template("login.html", user=current_user)
  else:
       return redirect(url_for('auth.home'))


@auth.route('/signup', methods=['GET', 'POST'])
def signup():
     if request.method == "POST":
        global number
        global name
        global password
        global email
        email = request.form.get('email')
        number = request.form.get('number')
        name = request.form.get('name')
        password = request.form.get('password')
        temp=[]
        if not str(number).isdigit() or len(number) != 10:
            flash("Invalid mobile number entered... ", category="error")

        else:
            cur.execute("select email,phone from login")
            data = cur.fetchall()
            for i in data:
                for j in i:
                    temp.append(j)

            if email in temp:
                flash("Email already exists...", category="error")

            elif number in temp:
                flash("Mobile Number already exists...", category="error")

            else :
                global rr
                rr = random.randint(100000, 999999)
                send_otp(rr,email)
                flash("Otp sent on Email",category="success")
                return redirect(url_for("auth.otp"))

     return render_template("signup.html", user=current_user)

@auth.route('/otp', methods=['GET', 'POST'])
def otp():
    global email
    global number
    global name
    global password
    global rr
    if request.method =="POST" :
        eotp = request.form.get('eotp')
        print(eotp)
        print(rr)
        if not eotp.isdigit() or len(eotp)!=6:
            flash("Invalid otp", category="error")
        else:
            if int(eotp)!=rr:
                flash("Incorrect Otp",category="error")
            else :
                cur.execute("insert into login values('{}','{}','{}','{}')".format(name, email, password, number))
                con.commit()
                flash("ACCOUNT CREATED KINDLY LOGIN", category="success")
                return  redirect(url_for("auth.login"))

    return render_template("otp.html", user=current_user)

@auth.route('/home', methods=['GET', 'POST'])
def home():

    return render_template("home2.html", user=current_user)

@auth.route('/logout', methods=['GET', 'POST'])
def logout():
    global email
    global  name
    global password
    global number
    email = 0
    name = 0
    password = 0
    number = 0
    flash("Logged Out successfully !!",category="success")
    return redirect(url_for("auth.firstpage"))

@auth.route('/gamemap', methods=['GET', 'POST'])
def gamemap():
    return render_template("gamemap.html", user=current_user)

@auth.route('/simonsays', methods=['GET', 'POST'])
def simonsays():
    return render_template("simonsays.html", user=current_user)

@auth.route('/memorygame', methods=['GET', 'POST'])
def memorygame():
    return render_template("memorygame.html", user=current_user)
@auth.route('/mathquiz', methods=['GET', 'POST'])
def mathquiz():
    return render_template("mathquiz.html", user=current_user)
@auth.route('/word', methods=['GET', 'POST'])
def word():
    return render_template("word.html", user=current_user)